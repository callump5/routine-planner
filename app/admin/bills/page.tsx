import PageHeader from "@/app/ui/admin/page/page-header";
import { prisma } from "@/lib/db";

export default async function Bills() {
  // Aggregate total amount
  const bills = await prisma.budget.aggregate({
    where: { userId: 1 },
    _sum: {
      amount: true,
    },
  });

  let formattedAmount = bills._sum.amount?.toFixed(2) || "0.00";

  return (
    <div>
      <PageHeader title="Budget & Bills" />
      <h2>Total Bills Amount: ${formattedAmount}</h2>
    </div>
  );
}
