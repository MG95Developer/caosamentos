import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function BackToResults(props: { title: string; URL: string }) {
	return (
		<Box>
			<Link href={props.URL}>
				<HStack>
					<ArrowBackIcon fontSize={40} mr={3} />
					<Box>
						<Text w="200px">{props.title.toUpperCase()}</Text>
					</Box>
				</HStack>
			</Link>
		</Box>
	);
}
