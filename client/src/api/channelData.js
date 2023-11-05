import { useQuery, useMutation } from '@tanstack/react-query';
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
export const useCreateChannel = (newChannel) => {
  const mutation = useMutation({
    queryKey: ['channelCreate'],
    mutationFn: () => apiService.post('/channels', newChannel),
  });
  return mutation;
};
