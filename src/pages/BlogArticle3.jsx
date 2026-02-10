import React from 'react';
import { BlogArticleWrapper } from '../components/atlas/BlogArticleLayout';
import { useLanguage } from '../components/atlas/LanguageContext';
import { blogArticles } from '../components/atlas/blogContent';

export default function BlogArticle3() {
  return (
    <BlogArticleWrapper articleId={3}>
      <ArticleContent />
    </BlogArticleWrapper>
  );
}

function ArticleContent() {
  const { language } = useLanguage();
  const content = blogArticles[language]?.[3]?.content || blogArticles.pt[3].content;
  
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}