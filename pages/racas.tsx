import { Box, Heading } from '@chakra-ui/react';
import DogProfileCard from '@/src/components/Molecules/DogProfileCard';

export default function Racas() {
	return (
		<Box>
			{/* page title */}

			<Box my={30}>
				<Heading>Página Raças</Heading>
			</Box>

			<Box my={60}>
				{/* component */}
				<Box my={60}>
					<DogProfileCard
						buttonURL="/404"
						dogIMG="/images/dog-2.jpeg"
						buttonText="ver o perfil"
						dogName="Filipe"
						dogGender="male"
						dogBreed="Pastor Alemão"
						dogLocation="almancil"
					/>
				</Box>
			</Box>
		</Box>
	);
}
