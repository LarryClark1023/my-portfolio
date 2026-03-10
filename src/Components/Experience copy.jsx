import React, { Fragment } from 'react';
import { Grid, Typography } from '@mui/material';

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';

import { FaRegHospital, FaToolbox, FaLaptopCode } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';
import 'animate.css';
import { SiAutodesk } from 'react-icons/si';

export default function Experience() {
	return (
		<Fragment>
			<Typography variant='h5' textTransform='uppercase' fontWeight={700} mb={2}>
				{' '}
				Experience :{' '}
			</Typography>

			<Timeline position='right' color='text.white' sx={{ px: 0, overflow: 'hidden' }}>
				<Grid container>
					<Grid item xs={12} lg={6}>
						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<FaLaptopCode />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									Jan 2023 – Dec 2023
								</Typography>

								<Typography variant='h6'> Mid-Level Full-Stack Developer | Railsware | (Kyiv, Ukraine / Remote) </Typography>
								<Typography variant='h6'> Designed JWT/OAuth2 authentication for enterprise SaaS platform.

Reduced backend API response times by ~30% through query optimization.

Integrated Stripe and SendGrid for payments and notifications.

Built GraphQL endpoints and automated deployments using Docker and GitHub Actions. </Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<FaLaptopCode />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									Jan 2022 – Dec 2022
								</Typography>

								<Typography variant='h6'> Full-Stack Developer | Netguru </Typography>
								<Typography variant='h6'> Poznań, Poland / Remote

Developed responsive web applications using React, Node.js, Express, and PostgreSQL.

Implemented reusable UI components and optimized page load times by ~20%.

Transitioned to remote work, coordinating via Slack, Zoom, and GitHub.

Participated in Agile sprints and code reviews to maintain high-quality standards. </Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<SiAutodesk />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									Nov/2018 - Present
								</Typography>

								<Typography variant='h6'> 3D VISUALIZER </Typography>
								<Typography variant='h6'> Freelancer </Typography>
							</TimelineContent>
						</TimelineItem>
					</Grid>

					<Grid item xs={12} lg={6}>
						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<FaToolbox />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									Jul/2016 - Sep/2018
								</Typography>
								<Typography variant='h6'> Biomedical Engineer </Typography>
								<Typography variant='h6'> Smama Group, Jeddah </Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<FaToolbox />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									Feb/2014 - Jul/2016
								</Typography>
								<Typography variant='h6'> Biomedical Engineer </Typography>
								<Typography variant='h6'> Saad Ahmed Saad EST, Jeddah </Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<FaRegHospital />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									Mar/2013 - Dec/2013
								</Typography>
								<Typography variant='h6'> Biomedical Engineer Trainee and Volunteer </Typography>
								<Typography variant='h6'> International Medical Center, Jeddah </Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem sx={{ '&::before': { content: 'none' } }}>
							<TimelineSeparator>
								<TimelineDot color='primary'>
									{' '}
									<GiOpenBook />{' '}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ p: 0, pt: '12px', pl: 2 }}>
								<Typography variant='body1' component='span' bgcolor='divider' py={0.3} px={2} borderRadius='20px'>
									2017 - 2021
								</Typography>
								<Typography variant='h6'> Lakehead University, Thunder Bay </Typography>
								<Typography variant='h6'> Bachelor of Computer Science </Typography>
							</TimelineContent>
						</TimelineItem>
					</Grid>
				</Grid>
			</Timeline>
		</Fragment>
	);
}
