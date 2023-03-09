import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function BackToResults(props: { title: string; URL: string }) {
	return (
		<Box>
			<Link href={props.URL}>
				<HStack>
					<ChevronLeftIcon />
					<Text>{props.title.toUpperCase()}</Text>
				</HStack>
			</Link>
		</Box>
	);
}
