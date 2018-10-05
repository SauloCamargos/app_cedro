import { InvestorProfileModule } from './investor-profile.module';

describe('InvestorProfileModule', () => {
  let investorProfileModule: InvestorProfileModule;

  beforeEach(() => {
    investorProfileModule = new InvestorProfileModule();
  });

  it('should create an instance', () => {
    expect(investorProfileModule).toBeTruthy();
  });
});
