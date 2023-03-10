import { Box, Heading } from '@chakra-ui/react';
import BackToResults from '@/src/components/Molecules/BackToResults';
import DogSize from '@/src/components/Molecules/DogSize';
import BookmarkOrShare from '@/src/components/BookmarkOrShare';
import DogMetrics from '@/src/components/Molecules/DogMetrics';
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
				<Box my={30}>
					<BackToResults title="Voltar aos resultados de pesquisa" URL="/404" />
				</Box>
			</Box>

			<Box my={60}>
				{/* component */}
				<Box my={30}>
					<BookmarkOrShare bookmark="guardar nos favoritos" share="partilhar" />
				</Box>
			</Box>

			<Box my={60}>
				{/* component */}
				<Box my={30}>
					<DogSize
						sizeXS="Mini"
						sizeM="Médio"
						sizeL="Grande"
						sizeXL="Gigante"
					/>
				</Box>
			</Box>

			<Box my={60}>
				{/* component */}
				<Box my={30}>
					<DogMetrics metricsTitle="energia" percentage={25} />
				</Box>
				<Box my={30}>
					<DogMetrics metricsTitle="social" percentage={50} />
				</Box>
				<Box my={30}>
					<DogMetrics metricsTitle="inteligência" percentage={60} />
				</Box>
				<Box my={30}>
					<DogMetrics metricsTitle="ambiente interior" percentage={30} />
				</Box>
				<Box my={30}>
					<DogMetrics metricsTitle="ambiente exterior" percentage={70} />
				</Box>
				<Box my={30}>
					<DogMetrics metricsTitle="exercício" percentage={75} />
				</Box>
				<Box my={30}>
					<DogMetrics metricsTitle="gromming" percentage={65} />
				</Box>
				<Box my={30}>
					<DogMetrics metricsTitle="esperança média de vida" percentage={85} />
				</Box>
			</Box>

			<Box my={60}>
				{/* component */}
				<Box my={60}>
					<DogProfileCard
						dogIMG="/images/dog-2.jpeg"
						nameTitle="nome"
						breedTitle="raça"
						locationTitle="localização"
						buttonText="ver o perfil"
						dogName="Filipe"
						dogBreed="Pastor Alemão"
						dogLocation="almancil"
					/>
				</Box>
			</Box>
		</Box>
	);
}
