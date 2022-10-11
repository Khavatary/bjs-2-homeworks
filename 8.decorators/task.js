function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find(item => item.hash === hash);;
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }
    let result = func(...args);
    cache.push({
      hash,
      result
    });
    if (cache.length > 5) {
      cache.shift()
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutId === null) {
      wrapper.count++;
      func.call(this, ...args);
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func.call(this, ...args);
    }, delay);
    console.log(wrapper.count);
    console.log(wrapper.allCount);
  }
  return wrapper;
}

