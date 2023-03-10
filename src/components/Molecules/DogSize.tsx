import { Box, Heading, HStack, VStack, Text, Spacer } from '@chakra-ui/react';
import { FaDog } from 'react-icons/fa';

interface IDogSize {
	sizeXS: string;
	sizeM: string;
	sizeL: string;
	sizeXL: string;
}

export default function DogSize({ sizeXS, sizeM, sizeL, sizeXL }: IDogSize) {
	const dogSizeStyles = {
		fontSize: '1em',
		textTransform: 'uppercase',
		fontWeight: '400',
		marginBottom: '2em',
	};

	const dogIconStyles = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		height: '20px',
		color: 'blue.400',
	};

	return (
		<Box>
			<Heading as="h4" sx={dogSizeStyles}>
				Porte
			</Heading>

			<HStack>
				<VStack pr={6} opacity="1">
					<Box sx={dogIconStyles}>
						<FaDog fontSize="20px" />
					</Box>
					<Box>{sizeXS}</Box>
				</VStack>

				<VStack pr={6} opacity="1">
					<Box sx={dogIconStyles}>
						<FaDog fontSize="30px" />
					</Box>
					<Box>{sizeM}</Box>
				</VStack>

				<VStack pr={6} opacity=".25">
					<Box sx={dogIconStyles}>
						<FaDog fontSize="40px" />
					</Box>
					<Box>{sizeL}</Box>
				</VStack>

				<VStack pr={0} opacity=".25">
					<Box sx={dogIconStyles}>
						<FaDog fontSize="45px" />
					</Box>
					<Box>{sizeXL}</Box>
				</VStack>
			</HStack>
		</Box>
	);
}
