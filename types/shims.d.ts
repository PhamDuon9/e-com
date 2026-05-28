declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'react/jsx-runtime' {
  export * from 'react';
}

declare module 'part:@sanity/*';
declare module 'all:part:@sanity/*';

declare module 'part:@sanity/base/schema-creator';
declare module 'all:part:@sanity/base/schema-type';

declare module '*.css';
declare module '*.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

