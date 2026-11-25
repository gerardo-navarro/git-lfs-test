# Git LFS test: option 4

Test for Sports Athletic issue #157: this GitHub repo keeps code and docs in
plain Git, while the media in `assets/` are Git LFS files whose content is
stored in a GitLab project instead of GitHub's LFS storage.

| Where | What |
|---|---|
| This repo (GitHub) | Code, docs, and for each media file a ~130-byte LFS pointer |
| [b310-digital/git-lfs-test](https://gitlab.com/b310-digital/git-lfs-test) (GitLab) | Only a README in Git; the media content lives in its Git LFS storage |

`.lfsconfig` points Git LFS at the GitLab project, so GitHub's LFS quota is
not used. GitHub's web view can show only the pointers, not the files.

```bash
GIT_LFS_SKIP_SMUDGE=1 git clone git@github.com:gerardo-navarro/git-lfs-test.git
cd git-lfs-test
git lfs pull --include="assets/exercise_videos/1-*"   # one video, from GitLab
git lfs pull                                          # all media, from GitLab
```

The GitLab project is private, so `.lfsconfig` uses its SSH address and
downloading needs access to it. A public project would use its https
address, and anyone could download without logging in.
