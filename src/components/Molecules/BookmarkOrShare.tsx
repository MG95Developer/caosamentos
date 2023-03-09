import { Box, VStack, Text } from '@chakra-ui/react';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';

export default function BookmarkOrShare(props: {
	bookmark: string;
	share: string;
}) {
	const containerStyles = {
		color: 'blue.400',
	};

	const textStyles = {
		textAlign: 'center',
		color: 'darkgray',
		fontSize: '.85rem',
	};

	return (
		<VStack py={10}>
			<Box py={5}>
				<VStack>
					<Box sx={containerStyles}>
						<FaRegBookmark size={30} />
					</Box>
					<Text sx={textStyles}>{props.bookmark.toUpperCase()}</Text>
				</VStack>
			</Box>

			<Box py={5}>
				<VStack>
					<Box sx={containerStyles}>
						<FaShareAlt size={30} />
					</Box>
					<Text sx={textStyles}>{props.share.toUpperCase()}</Text>
				</VStack>
			</Box>
		</VStack>
	);
}
