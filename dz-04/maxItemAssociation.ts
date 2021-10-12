export function maxItemAssociation(orders: string[][]): string[] {
    let recommendations: Array<Set<string>> = [];
  
    orders.forEach((order) => {
      if (!recommendations.length) {
        recommendations.push(new Set(order));
      } else {
        recommendations.forEach((recommendation: Set<string>) => {
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
  
    const result = recommendations
      .map((recomendation) => [...recomendation].sort())
      .sort();
  
    return result[0];
  }
  