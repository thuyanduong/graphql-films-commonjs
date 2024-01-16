const paginate = (p, pS) => {
    const page = p || 1
    const pageSize = pS || 100
    const offset = (page - 1) * pageSize
    const limit = pageSize
  
    return {
      offset,
      limit,
    };
  };

module.exports = paginate