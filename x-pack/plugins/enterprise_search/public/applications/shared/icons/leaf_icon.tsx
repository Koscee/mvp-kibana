/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';

// TODO: This icon will be added to EUI soon - we should remove this custom SVG when once it's available in EUI
export const LeafIcon: React.FC = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="euiIcon"
    width={16}
    height={16}
    {...props}
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    <path d="M15.0331 0.886954C15.2956 0.973255 15.5233 1.21266 15.5414 1.55005C15.6669 3.88393 15.361 7.34896 14.1321 10.0468C13.5157 11.3998 12.6491 12.5993 11.4483 13.3465C10.2327 14.1029 8.72706 14.3628 6.91355 13.9235C6.53012 13.8306 6.17184 13.7065 5.83884 13.5557C5.54781 13.4238 5.49404 13.047 5.72206 12.8232L5.77108 12.7753C5.92249 12.6281 6.15055 12.6009 6.34449 12.6844C6.59563 12.7926 6.86382 12.8825 7.14903 12.9516C8.73299 13.3354 9.95814 13.096 10.92 12.4974C11.8967 11.8897 12.6543 10.8786 13.222 9.63227C14.2675 7.33734 14.6079 4.37902 14.5638 2.17691C13.7629 2.93049 13.0215 3.38061 12.3014 3.63327C11.4623 3.92768 10.6938 3.93856 9.97619 3.90053C9.79372 3.89086 9.61467 3.87835 9.43764 3.86598C8.22713 3.78139 7.11038 3.70335 5.63121 4.58567C3.63527 5.77625 3.1 8.36625 4.00645 10.3814C5.40683 9.10928 7.13522 8.0625 9.00009 8.0625C9.27624 8.0625 9.50009 8.28636 9.50009 8.5625C9.50009 8.83864 9.27624 9.0625 9.00009 9.0625C7.39524 9.0625 5.79665 10.0415 4.41045 11.3724C3.03666 12.6914 1.95051 14.2809 1.37654 15.3332C1.24431 15.5756 0.940593 15.6649 0.698168 15.5327C0.455744 15.4005 0.366415 15.0967 0.498647 14.8543C1.04523 13.8523 2.01371 12.4126 3.25129 11.1188C1.94153 8.63223 2.53953 5.26546 5.11893 3.72686C6.88003 2.67636 8.2969 2.77931 9.52388 2.86847C9.69587 2.88096 9.86414 2.89319 10.0291 2.90193C10.6974 2.93734 11.3129 2.92032 11.9703 2.68967C12.6272 2.45919 13.3678 1.99999 14.2457 1.08421C14.4648 0.855623 14.776 0.802403 15.0331 0.886954Z" />
  </svg>
);
