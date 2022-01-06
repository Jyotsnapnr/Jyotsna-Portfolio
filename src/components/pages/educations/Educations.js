import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Bachelor's Degree in Information Technology</td>
								<td>August 2008-June 2012</td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>The Complete 2021 Web Development Bootcamp</td>
								<td>Sep 2021</td>
								<td>
									<Link to='/webdev' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>React Programming Masterclass:Build Real World Projects 2021
</td>
								<td>Dec 2021</td>
								<td>
									<Link to='/project' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Responsive Web Design</td>
								<td>Nov 2021</td>
								<td>
									<Link to='/responsive' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
                            <tr>
								<td>JavaScript Algorithms and Data Structures</td>
								<td>Nov 2021</td>
								<td>
									<Link to='/algorithm' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
