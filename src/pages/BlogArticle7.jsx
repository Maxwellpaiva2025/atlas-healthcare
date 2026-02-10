import React from 'react';
import { BlogArticleWrapper } from '../components/atlas/BlogArticleLayout';
import { useLanguage } from '../components/atlas/LanguageContext';
import { blogArticles } from '../components/atlas/blogContent';

function Article7Content() {
  const { language } = useLanguage();
  const content = blogArticles[language]?.[7]?.content || blogArticles.pt[7].content;

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}

export default function BlogArticle7() {
  return (
    <BlogArticleWrapper articleId={7}>
      <Article7Content />
    </BlogArticleWrapper>
  );
}