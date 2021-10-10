export function maxItemAssociation(orders) {
  let recommendations = [];

  orders.forEach((order) => {
    if (!recommendations.length) {
      recommendations.push(new Set(order));
    } else {
      recommendations.forEach((recommendation) => {
        for (const item of order) {
          if (recommendation.has(item)) {
            order.forEach((el) => {
              recommendation.add(el);
            });
          } else {
            recommendations.push(new Set(order));
          }
        }
      });
    }
  });

  recommendations = recommendations
    .map((recomendation) => [...recomendation].sort())
    .sort();

  return recommendations[0];
}
