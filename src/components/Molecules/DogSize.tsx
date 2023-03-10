import { Box, Heading, HStack, VStack, Text, Spacer } from '@chakra-ui/react';
import { FaDog } from 'react-icons/fa';
import Logotype from '../Atoms/Logotype';

export default function DogSize() {
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
	};

	return (
		<Box paddingLeft="20px">
			<Heading as="h4" sx={dogSizeStyles}>
				Porte
			</Heading>

			<HStack>
				<VStack pr={2}>
					<Box sx={dogIconStyles}>
						<FaDog fontSize="20px" />
					</Box>
					<Box>Mini</Box>
				</VStack>

				<VStack pr={2}>
					<Box sx={dogIconStyles}>
						<FaDog fontSize="25px" />
					</Box>
					<Box>Médio</Box>
				</VStack>

				<VStack pr={2}>
					<Box sx={dogIconStyles}>
						<FaDog fontSize="35px" />
					</Box>
					<Box>Grande</Box>
				</VStack>

				<VStack pr={0}>
					<Box sx={dogIconStyles}>
						<FaDog fontSize="40px" />
					</Box>
					<Box>Gigante</Box>
				</VStack>
			</HStack>
		</Box>
	);
}
