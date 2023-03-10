import { Box, Heading } from '@chakra-ui/react';

import BackToResults from '@/src/components/Molecules/BackToResults';
import BookmarkOrShare from '@/src/components/Molecules/BookmarkOrShare';
import DogSize from '@/src/components/Molecules/DogSize';

export default function Racas() {
	return (
		<Box>
			<Heading my={5}>Página Raças</Heading>

			<BackToResults title="Voltar aos resultados de pesquisa" URL="/404" />

			<BookmarkOrShare bookmark="guardar nos favoritos" share="partilhar" />

			<DogSize />
		</Box>
	);
}
