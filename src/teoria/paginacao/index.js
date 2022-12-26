// Função que carrega mais posts quando o botão é clicado
loadMorePosts = () => {
  // Desestrutura as variáveis page, postsPerPage, allPosts e posts do estado
  const { page, postsPerPage, allPosts, posts } = this.state;
  // Calcula o índice da próxima página
  const nextPage = page + postsPerPage;
  // Recupera os posts da próxima página
  const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
  // Adiciona os novos posts ao array de posts
  posts.push(...nextPosts);

  // Atualiza o estado com os novos posts e o índice da próxima página
  this.setState({
    posts,
    page: nextPage,
  });
};
