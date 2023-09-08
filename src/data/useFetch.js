function getSuspender(promise) {
    let status = "pending";
    let response;
    const suspender = promise.then(
      (res) => {
        status = "success";
        response = res;
      },
      (err) => {
        status = "error";
        response = err;
      }
    );
  
    const read = () => {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw response;
        default:
          return response;
      }
    };
    return { read };
  }
  
  export function useFetch(url) {
    const promise = fetch(url)
      .then((response) => response.json())
      .then((data) => data);
    return getSuspender(promise);
  }
  
  /*
  Esta e otra dorma de solicitar datos
  export function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [controller, setController] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const abortController = new AbortController();
      setController(abortController);
      setLoading(true);
      fetch(url, { signal: abortController.signal })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Request Cancelled");
          } else {
            setError(error);
          }
        })
        .finally(() => setLoading(false));
      return () => abortController.abort();
    }, []);
  
    const handleCancelRequest = () => {
      if (controller) {
        controller.abort();
      } else {
        setError("Request Cancelled");
      }
    };
    return { data, loading, handleCancelRequest };
  }
  */
  