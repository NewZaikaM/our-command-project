import React from 'react';
import {
	Button,
	Checkbox,
	Typography,
	Link,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Stack,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionItem({ company }) {
	const { companyName, vacancyLink, missingKnowledge, status, lastUpdate } =
		company;
	const favoritesLabel = { inputProps: { 'aria-label': 'favorites label' } };

	return (
		<Accordion sx={{ marginBottom: '5px' }}>
			<AccordionSummary
				sx={{ borderBottom: '1px solid rgba(230, 230, 230, 1)' }}
				expandIcon={<ExpandMoreIcon />}
			>
				<Typography sx={{ fontFamily: 'inherit' }}>{companyName}</Typography>
			</AccordionSummary>

			<AccordionDetails>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Typography sx={{ fontFamily: 'inherit' }}>
						<Typography
							fontWeight="500"
							variant="span"
							sx={{ fontFamily: 'inherit' }}
						>
							{'Статус: '}
						</Typography>
						{status}
					</Typography>
					<Checkbox
						{...favoritesLabel}
						icon={<BookmarkBorderIcon />}
						checkedIcon={<BookmarkIcon />}
					/>
				</Stack>

				<Typography marginBottom="10px" sx={{ fontFamily: 'inherit' }}>
					<Typography
						fontWeight="500"
						sx={{ fontFamily: 'inherit' }}
						variant="span"
					>
						{'Недостающие знания: '}
					</Typography>
					{missingKnowledge}
				</Typography>

				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Button
						size="small"
						sx={{ fontFamily: 'inherit' }}
						component={Link}
						target="_blank"
						variant="outlined"
						href={vacancyLink}
					>
						Перейти к вакансии
					</Button>

					<Typography textAlign="right" sx={{ fontFamily: 'inherit' }}>
						<Typography
							fontWeight="500"
							variant="span"
							sx={{ fontFamily: 'inherit' }}
						>
							{'Последнее обновление: '}
						</Typography>
						{lastUpdate}
					</Typography>
				</Stack>
			</AccordionDetails>
		</Accordion>
	);
}

export { AccordionItem };
