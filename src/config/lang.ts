import { monaco } from 'react-monaco-editor';

type IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
type ILanguage = monaco.languages.IMonarchLanguage;

export const richLanguageConfiguration: IRichLanguageConfiguration = {
  // If we want to support code folding, brackets ... ( [], (), {}....), we can override some properties here
  // check the doc
};

export const monarchLanguage = <ILanguage>{
  keywords: [
    'let',
    'if',
    'else',
    'while',
    'for',
    'break',
    'continue',
    'return',
    'struct',
    'fn',
  ],
  typeKeywords: [
    'i8',
    'i16',
    'i32',
    'i64',
    'i128',
    'u8',
    'u16',
    'u32',
    'u64',
    'u128',
    'f32',
    'f64',
    'bool',
    'void',
  ],
  tokenizer: {
    root: [
      [
        /[a-z_$][\w$]*/,
        {
          cases: {
            '@typeKeywords': 'keyword',
            '@keywords': 'keyword',
            '@default': 'identifier',
          },
        },
      ],
    ],
  },
};
