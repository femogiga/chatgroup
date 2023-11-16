import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useUserOnChannelData = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['useronchannel'],
    queryFn: () => apiService.get('/subscriptions').then((res) => res.data),
  });
  return { isPending, error, data };
};

export const useUserOnChannelDataById = (id) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['userOnChannelById'],
    queryFn: () =>
      apiService.get(`/subscriptions/${id}`).then((res) => res.data),
  });
  return { isPending, error, data };
};

export const useCreateUserOnChannelMutation = () => {
  const queryClient = useQueryClient();

  const { isLoading, isSuccess, error, mutate } = useMutation({
    mutationFn: async (data) => {
      const response = await apiService.post('/subscriptions', data);

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userData'] });
    },
  });

  return { isLoading, isSuccess, error, mutate };
};
