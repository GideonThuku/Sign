
import { render, screen } from '@testing-library/react';
import CoursePage, { getStaticProps } from '../pages/courses/[courseSlug]/index';

test('renders lessons list for a course', async () => {
  const propsRes = await getStaticProps({ params: { courseSlug: 'coding-basics' } });
  const { course, courseLessons } = propsRes.props;
  render(<CoursePage course={course} courseLessons={courseLessons} />);
  expect(screen.getByText(/Your First HTML Page/)).toBeInTheDocument();
});
