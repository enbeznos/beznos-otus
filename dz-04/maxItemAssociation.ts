export function maxItemAssociation(orders: Array<string[]>): string[] {
    let recommendations: Array<Set<string>> = [];
  
    orders.forEach((order: string[]) => {
      if (!recommendations.length) {
        recommendations.push(new Set<string>(order));
      } else {
        recommendations.forEach((recommendation: Set<string>) => {
          for (const item of order) {
            if (recommendation.has(item)) {
              order.forEach((el: string) => {
                recommendation.add(el);
              });
            } else {
              recommendations.push(new Set<string>(order));
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
  