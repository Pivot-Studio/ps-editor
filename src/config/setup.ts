import { monaco } from 'react-monaco-editor';
import { languageExtensionPoint, languageID } from './index';
import { monarchLanguage, richLanguageConfiguration } from './lang';
export function setupLanguage() {
  (window as any).MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
      console.log(moduleId, label);

      return './editor.worker.js';
    },
  };

  monaco.languages.register(languageExtensionPoint);
  monaco.languages.onLanguage(languageID, () => {
    monaco.languages.setMonarchTokensProvider(languageID, monarchLanguage);
    monaco.languages.setLanguageConfiguration(
      languageID,
      richLanguageConfiguration
    );
  });
}
