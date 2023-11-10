import {
  useQuery,
  useMutation,
  QueryClient,
  useQueryClient,
} from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useChatData = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['chatData'],
    queryFn: () => apiService.get('/chats').then((res) => res.data),
  });
  return { isPending, error, data };
};

export const useReformedData = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['reformedChatData'],
    queryFn: () =>
      apiService.get('/chats/groupedbyDate').then((res) => res.data),
  });
  return { isPending, error, data };
};

export const useCreateChatMutation = () => {
  const queryClient = useQueryClient();

  const { isLoading, isSuccess, error, mutate } = useMutation({
    mutationFn: async (data) => {
      const response = await apiService.post('/chats', data);

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reformedChatData'] });
    },
  });

  return { isLoading, isSuccess, error, mutate };
};
