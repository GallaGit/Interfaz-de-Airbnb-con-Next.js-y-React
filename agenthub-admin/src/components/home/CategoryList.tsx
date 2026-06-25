import Link from "next/link";
import Badge from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";

type CategoryListProps = {
  categories: string[];
};

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <section className="space-y-4">
      <SectionTitle
        title="Browse by category"
        subtitle="Jump directly to the type of stay you are looking for"
      />
      <div className="flex flex-wrap gap-2.5">
        {categories.map((category) => (
          <Link key={category} href={`/search?category=${encodeURIComponent(category)}`}>
            <Badge>{category}</Badge>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
