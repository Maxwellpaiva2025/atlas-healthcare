import React from 'react';
import { BlogArticleWrapper } from '../components/atlas/BlogArticleLayout';
import { useLanguage } from '../components/atlas/LanguageContext';
import { blogArticles } from '../components/atlas/blogContent';

function Article2Content() {
  const { language } = useLanguage();
  const content = blogArticles[language]?.[2]?.content || blogArticles.pt[2].content;

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}

export default function BlogArticle2() {
  return (
    <BlogArticleWrapper articleId={2}>
      <Article2Content />
    </BlogArticleWrapper>
  );
}