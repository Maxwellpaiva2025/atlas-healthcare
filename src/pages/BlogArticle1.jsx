import React from 'react';
import { BlogArticleWrapper } from '../components/atlas/BlogArticleLayout';
import { useLanguage } from '../components/atlas/LanguageContext';
import { blogArticles } from '../components/atlas/blogContent';

function Article1Content() {
  const { language } = useLanguage();
  const content = blogArticles[language]?.[1]?.content || blogArticles.pt[1].content;

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}

export default function BlogArticle1() {
  return (
    <BlogArticleWrapper articleId={1}>
      <Article1Content />
    </BlogArticleWrapper>
  );
}