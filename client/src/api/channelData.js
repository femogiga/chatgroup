import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useChannelData = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['channelData'],
    queryFn: () => apiService.get('/channels').then((res) => res.data),
  });
  return { isPending, error, data };
};

export const useChannelDataById = (id) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['channelDataById'],
    queryFn: () => apiService.get(`/channels/${id}`).then((res) => res.data),
  });
  return { isPending, error, data };
};
// export const useCreateChannel = (newChannel) => {
//   const mutation = useMutation({
//     queryKey: ['channelCreate'],
//     mutationFn: () => apiService.post('/channels', newChannel),
//   });
//   return mutation;
// };

export const useCreateChannelMutation = () => {
  const queryClient = useQueryClient();

  const { isLoading, onSuccess, error, mutate } = useMutation({
    mutationFn: async (data) => {
      const response = await apiService.post('/channels', data);

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['channelData'] });
    },
  });

  return { isLoading, onSuccess, error, mutate };
};
