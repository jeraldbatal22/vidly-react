const paginate = (sorted, currentPage, postsPerPage) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sorted.slice(indexOfFirstPost, indexOfLastPost);

  return { currentPosts };
};

export default paginate;
