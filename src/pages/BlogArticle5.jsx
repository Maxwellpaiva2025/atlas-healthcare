import React from 'react';
import { BlogArticleWrapper } from '../components/atlas/BlogArticleLayout';
import { useLanguage } from '../components/atlas/LanguageContext';
import { blogArticles } from '../components/atlas/blogContent';

export default function BlogArticle5() {
  return (
    <BlogArticleWrapper articleId={5}>
      <ArticleContent />
    </BlogArticleWrapper>
  );
}

function ArticleContent() {
  const { language } = useLanguage();
  const content = blogArticles[language]?.[5]?.content || blogArticles.pt[5].content;
  
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}