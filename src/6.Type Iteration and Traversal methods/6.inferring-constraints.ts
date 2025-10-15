type Profile = {title:string};

// type GetTitles<Profiles extends Profile[]> = 
// Profiles extends [{title:infer T},...infer Others]
// ?[T,...GetTitles<Others>]:[];


type GetTittles1<Profiles extends Profile[]>=
Profiles extends [{title:infer T},...infer Others extends Profile[]]
?[T,...GetTittles1<Others>]
:[];