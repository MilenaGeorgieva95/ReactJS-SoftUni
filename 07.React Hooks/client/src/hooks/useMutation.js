export default function useMutation(url, method) {
  return {
    data: {},
    mutate(value) {},
    pending: true,
  };
}

//TODO: useMutation hook which takes url and method, returns mutate function, which when called afterwards with data sends the fetch
