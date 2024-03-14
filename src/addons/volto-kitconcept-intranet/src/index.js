import PersonResultItem from './theme/SolrSearch/PersonResultItem';

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['en'],
    defaultLanguage: 'en',
  };

  config.views.contentTypeSearchResultViews.Person = PersonResultItem;

  return config;
};

export default applyConfig;
