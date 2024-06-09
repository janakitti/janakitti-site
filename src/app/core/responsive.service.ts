import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  isMobile = false;
  constructor(private responsive: BreakpointObserver) {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isMobile = false;
      if (result.matches) {
        this.isMobile = true;
      }
    });
  }
}
