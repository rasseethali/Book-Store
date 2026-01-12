import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div
      className="group bg-white/70 backdrop-blur-xl rounded-2xl
                 shadow-md hover:shadow-2xl
                 transition-all duration-500
                 hover:-translate-y-2 overflow-hidden"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-64 object-cover
                     transition-transform duration-700
                     group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
          {book.title}
        </h3>

        <p className="text-sm text-gray-500">
          {book.author}
        </p>

        <p className="text-xl font-extrabold text-green-600">
          ₹{book.price}
        </p>

        {/* CTA */}
        <Link
          to={`/book/${book.id}`}
          className="inline-block mt-3 text-sm font-semibold
                     text-emerald-600 relative
                     after:absolute after:left-0 after:-bottom-1
                     after:w-0 after:h-[2px]
                     after:bg-emerald-600
                     after:transition-all after:duration-300
                     hover:after:w-full"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
