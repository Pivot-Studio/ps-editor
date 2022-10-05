import { monaco } from 'react-monaco-editor';

type IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
type ILanguage = monaco.languages.IMonarchLanguage;

export const richLanguageConfiguration: IRichLanguageConfiguration = {
  // If we want to support code folding, brackets ... ( [], (), {}....), we can override some properties here
  // check the doc
};

export const monarchLanguage = <ILanguage>{
  tokenizer: {
    root: [
      [/\d+/, { token: 'keyword' }],
      [/[a-z]+/, { token: 'string' }],
    ],
  },
};
