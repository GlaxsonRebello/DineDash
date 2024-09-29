import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase"; // Your Firebase config

const Review = () => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from Firestore
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "reviews"));
        const reviewsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReviews(reviewsList);
      } catch (error) {
        console.error("Error fetching reviews: ", error);
      }
    };
    fetchReviews();
  }, []);

  // Submit a review
  const submitReview = async (e) => {
    e.preventDefault();
    if (name.trim() && reviewText.trim()) {
      try {
        const newReview = await addDoc(collection(db, "reviews"), {
          name: name,
          review: reviewText,
        });

        // Update reviews state with the new review
        setReviews((prevReviews) => [
          ...prevReviews,
          { id: newReview.id, name: name, review: reviewText },
        ]);

        setName(""); // Clear name input
        setReviewText(""); // Clear review input
      } catch (error) {
        console.error("Error submitting review: ", error);
      }
    } else {
      console.error("Name and review cannot be empty.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h4 className="text-lg font-semibold mb-4">Leave a Review</h4>
      <form onSubmit={submitReview} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your Name"
          required
        />
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Write your review here..."
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit Review
        </button>
      </form>

      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4">Customer Reviews</h4>
        <ul className="space-y-2">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <li key={review.id} className="border-b pb-2">
                <strong>{review.name}:</strong> {review.review}
              </li>
            ))
          ) : (
            <li>No reviews yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Review;
