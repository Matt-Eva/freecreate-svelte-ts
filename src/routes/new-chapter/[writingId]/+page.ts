import { error } from '@sveltejs/kit';
import type { PageLoad } from '../../$types';

export const load: PageLoad = ({ params }) => {
	const { writingId } = params;
	if (params.writingId) {
		return {
			writingId: params.writingId
		};
	}
};
