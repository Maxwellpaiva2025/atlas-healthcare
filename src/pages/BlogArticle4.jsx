import React from 'react';
import { BlogArticleWrapper } from '../components/atlas/BlogArticleLayout';
import { useLanguage } from '../components/atlas/LanguageContext';
import { blogArticles } from '../components/atlas/blogContent';

export default function BlogArticle4() {
  return (
    <BlogArticleWrapper articleId={4}>
      <ArticleContent />
    </BlogArticleWrapper>
  );
}

function ArticleContent() {
  const { language } = useLanguage();
  const content = blogArticles[language]?.[4]?.content || blogArticles.pt[4].content;
  
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}