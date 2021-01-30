import { Injectable } from '@angular/core';
import { sum } from 'src/utils/sum';
import { CalculatorData } from '../../models/calculator-data';
import { CalculatorResults } from '../../models/calculator-results';
import { ReagentData } from '../../models/reagent-data';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  calculate(data: CalculatorData): CalculatorResults {
    const nonBenignReagentMassesSum = this.sumNonBenignReagentMasses(
      data.reagents
    );
    const reagentMassesSum = this.sumAllReagentMasses(data.reagents);

    return {
      eFactor: this.calculateEFactor(data.productMass, reagentMassesSum),
      effectiveMassYield: this.calculateEffectiveMassYield(
        data.productMass,
        nonBenignReagentMassesSum
      ),
      processMassIntensity: this.calculateProcessMassIntensity(
        data.productMass,
        reagentMassesSum
      ),
      reactionMassEfficiency: this.calculateReactionMassEfficiency(
        data.productMass,
        reagentMassesSum
      ),
    } as CalculatorResults;
  }

  private calculateEFactor(
    productMass: number,
    reagentMassesSum: number
  ): number {
    return (reagentMassesSum - productMass) / productMass;
  }

  private calculateEffectiveMassYield(
    productMass: number,
    nonBenignReagentMassesSum
  ): number {
    return (productMass / nonBenignReagentMassesSum) * 100;
  }

  private calculateProcessMassIntensity(
    productMass: number,
    reagentMassesSum: number
  ): number {
    return reagentMassesSum / productMass;
  }

  private calculateReactionMassEfficiency(
    productMass: number,
    reagentMassesSum: number
  ): number {
    return (productMass / reagentMassesSum) * 100;
  }

  private getReagentMasses(reagents: ReagentData[]): number[] {
    return reagents.map((reagent) => reagent.mass);
  }

  private sumAllReagentMasses(reagents: ReagentData[]): number {
    const reagentMasses = this.getReagentMasses(reagents);
    return sum(reagentMasses);
  }

  private sumNonBenignReagentMasses(reagents: ReagentData[]): number {
    const nonBenignReagents = reagents.filter((reagent) => !reagent.benign);
    const nonBenignReagentMasses = this.getReagentMasses(nonBenignReagents);
    return sum(nonBenignReagentMasses);
  }
}
