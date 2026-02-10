import React from 'react';
import { BlogArticleWrapper } from '../components/atlas/BlogArticleLayout';
import { useLanguage } from '../components/atlas/LanguageContext';
import { blogArticles } from '../components/atlas/blogContent';

export default function BlogArticle6() {
  return (
    <BlogArticleWrapper articleId={6}>
      <ArticleContent />
    </BlogArticleWrapper>
  );
}

function ArticleContent() {
  const { language } = useLanguage();
  const content = blogArticles[language]?.[6]?.content || blogArticles.pt[6].content;
  
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}