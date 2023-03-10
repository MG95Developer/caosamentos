import { Box, VStack, Text, Button } from '@chakra-ui/react';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import Link from 'next/link';

interface IBookMarkOrShare {
	bookmark: string;
	share: string;
}

export default function BookmarkOrShare({ bookmark, share }: IBookMarkOrShare) {
	const containerStyles = {
		color: 'blue.400',
	};

	const textStyles = {
		textAlign: 'center',
		color: 'darkgray',
		fontSize: '.85rem',
		textTransform: 'uppercase',
	};

	const propsContainer = {
		width: '120px',
		padding: '.5em',
		marginTop: '.85em',
	};

	return (
		<VStack py={10}>
			<Box py={5}>
				<Link href="/404">
					<VStack as="span">
						<Box sx={containerStyles} as="span">
							<FaRegBookmark size={30} />
						</Box>
						<Text as="span" sx={textStyles}>
							<Box sx={propsContainer}>{bookmark}</Box>
						</Text>
					</VStack>
				</Link>
			</Box>

			<Box py={5}>
				<Link href="/404">
					<VStack>
						<Box sx={containerStyles}>
							<FaShareAlt size={30} />
						</Box>
						<Text as="span" sx={textStyles}>
							<Box sx={propsContainer}>{share}</Box>
						</Text>
					</VStack>
				</Link>
			</Box>
		</VStack>
	);
}
