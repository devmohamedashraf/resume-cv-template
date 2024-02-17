import SectionLayout from "./SectionLayout.jsx";

export default function LatestProject() {
    return (
        <SectionLayout title='Latest Project' isBadge={true} badge='Portfolio'>
            <div>
                <div className='bg-smoke rounded-2xl p-3 flex flex-col gap-4'>
                    <div >
                        <img src='/latest-project.png' alt='' className='w-full object-cover rounded-xl' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='font-medium '>Project Name</span>
                        <span className='text-slate'>Short description for your latest projects.</span>
                        <div className='flex items-center gap-2 '>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_64_627)">
                                    <rect width="24" height="24" fill="white"/>
                                    <path d="M10.0906 18.2501C9.05002 18.2581 8.1179 17.6079 7.76622 16.6285C7.41453 15.6491 7.72006 14.5544 8.52809 13.8987C7.95496 13.4349 7.62198 12.737 7.62198 11.9997C7.62198 11.2624 7.95496 10.5645 8.52809 10.1006C7.7198 9.44514 7.41409 8.35039 7.76584 7.37097C8.11759 6.39156 9.04996 5.74145 10.0906 5.74991H13.9093C14.95 5.74145 15.8823 6.39156 16.2341 7.37097C16.5858 8.35039 16.2801 9.44514 15.4718 10.1006C16.2799 10.7563 16.5854 11.851 16.2337 12.8304C15.882 13.8097 14.9499 14.46 13.9093 14.4519C13.4287 14.4525 12.9584 14.3126 12.5562 14.0494V15.7994C12.5504 17.1562 11.4475 18.2524 10.0906 18.2501ZM10.0768 14.4525C9.33655 14.4642 8.74477 15.0717 8.75254 15.8121C8.7603 16.5524 9.36469 17.1474 10.1051 17.1436C10.8454 17.1397 11.4436 16.5385 11.4437 15.7981V14.4525H10.0762H10.0768ZM13.91 10.6544C13.1677 10.6582 12.5687 11.2623 12.5712 12.0046C12.5737 12.7468 13.1768 13.3469 13.9191 13.3456C14.6614 13.3443 15.2625 12.7423 15.2625 12C15.2597 11.255 14.6543 10.653 13.9093 10.6544H13.91ZM10.0912 10.6544C9.61047 10.6518 9.16487 10.9059 8.92227 11.321C8.67968 11.736 8.67694 12.249 8.91509 12.6666C9.15324 13.0842 9.59609 13.3431 10.0768 13.3456H11.4437V10.6544H10.0912ZM12.5562 6.85625V9.54814H13.9087C14.6322 9.5515 15.229 8.98276 15.2606 8.26V8.53187V8.20187C15.2575 7.4578 14.6534 6.85625 13.9093 6.85625H12.5562ZM10.09 6.85625C9.60922 6.85625 9.16499 7.11272 8.92462 7.52906C8.68424 7.9454 8.68424 8.45835 8.92462 8.87468C9.16499 9.29102 9.60922 9.5475 10.09 9.5475H11.4437V6.85625H10.09Z" fill="#A4ABB8"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_64_627">
                                        <rect width="24" height="24" rx="12" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className='text-royal font-medium hover:underline cursor-pointer'>Add Figma or Portfolio Link</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
};