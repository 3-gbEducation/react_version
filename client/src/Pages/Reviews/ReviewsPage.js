import React from 'react';
import ReviewComponent from './ReviewsComponent';

function ReviewsPage(props) {
    return (
        <div>
            <ReviewComponent type='students' />
            <ReviewComponent type='tutors' />
        </div>
    );
}

export default ReviewsPage;