import { Box, Text } from '@chakra-ui/react';

// custom components
import BackToResults from '@/src/components/Molecules/BackToResults';
import BookmarkOrShare from '@/src/components/Molecules/BookmarkOrShare';

export default function Racas() {
	return (
		<Box>
			<Text my={5}>Página Raças</Text>
			<BackToResults title="Voltar aos resultados de pesquisa" URL="/404" />

			<Box my={5} border="1px solid black" w={40}>
				<BookmarkOrShare bookmark="guardar nos favoritos" share="partilhar" />
			</Box>
		</Box>
	);
}
