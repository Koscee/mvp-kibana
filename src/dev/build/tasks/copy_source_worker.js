/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

const { writeFileSync, readFileSync, copyFileSync, mkdirSync } = require('fs');
const { resolve, extname, dirname } = require('path');

const { optimize } = require('svgo');
const { transformFileSync } = require('@babel/core');

const presets = require('@kbn/babel-preset/node_preset');

const { REPO_ROOT } = require('@kbn/utils');
const BUILD_ROOT = resolve(REPO_ROOT, 'build', 'kibana');

const babelOptions = {
  presets: [[presets, { 'kibana/rootDir': REPO_ROOT }]],
  cwd: REPO_ROOT,
  babelrc: false,
  sourceMaps: false,
  ast: false,
};

const svgOptions = {
  removeComments: false,
};

module.exports = ({ source }) => {
  const absoluteSource = resolve(REPO_ROOT, source);
  const absoluteDest = resolve(BUILD_ROOT, source);

  mkdirSync(dirname(absoluteDest), { recursive: true });

  const extension = extname(source);
  switch (extension) {
    case '.js':
    case '.ts':
    case '.tsx':
      const output = transformFileSync(absoluteSource, babelOptions);
      if (output.code) {
        const dest = absoluteDest.substring(0, absoluteDest.lastIndexOf('.')) + '.js';
        writeFileSync(dest, output.code);
      }
      break;
    case '.svg':
      const input = readFileSync(absoluteSource, 'utf-8');
      const result = optimize(input, {
        path: source,
        ...svgOptions,
      });
      if (result.error) throw new Error(result.error);
      if (typeof result.data === 'string') {
        const output = Buffer.from(result.data);
        writeFileSync(absoluteDest, output);
      }
      break;
    default:
      copyFileSync(absoluteSource, absoluteDest);
  }
};
